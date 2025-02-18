/*
  # Create rank history table

  1. New Tables
    - `rank_history`
      - `id` (uuid, primary key)
      - `user_id` (uuid, foreign key to auth.users)
      - `keyword` (text)
      - `position` (integer)
      - `url` (text)
      - `device` (text)
      - `location` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `rank_history` table
    - Add policies for authenticated users to:
      - Read their own rank history
      - Insert new rank history entries
*/

CREATE TABLE IF NOT EXISTS rank_history (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  keyword text NOT NULL,
  position integer NOT NULL,
  url text NOT NULL,
  device text NOT NULL,
  location text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE rank_history ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own rank history"
  ON rank_history
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own rank history"
  ON rank_history
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE INDEX idx_rank_history_user_id ON rank_history(user_id);
CREATE INDEX idx_rank_history_created_at ON rank_history(created_at);