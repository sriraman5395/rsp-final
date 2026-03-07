-- Create markers table
CREATE TABLE IF NOT EXISTS markers (
  id TEXT PRIMARY KEY,
  lc_no TEXT,
  division TEXT,
  section TEXT,
  district TEXT,
  chainage TEXT,
  location TEXT,
  x REAL,
  y REAL,
  rob_rub_both TEXT,
  state_govt_agency TEXT,
  technical_details TEXT, -- JSON stored as TEXT
  cost_details TEXT,      -- JSON stored as TEXT
  present_status TEXT     -- JSON stored as TEXT
);

-- Create marker_images table
CREATE TABLE IF NOT EXISTS marker_images (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  marker_id TEXT,
  url TEXT,
  caption TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (marker_id) REFERENCES markers(id) ON DELETE CASCADE
);

-- Insert sample data (optional)
INSERT OR IGNORE INTO marker_images (marker_id, url, caption) VALUES 
('MAS2MAS-GDR', 'https://picsum.photos/seed/railway1/800/600', 'Site Overview'),
('MAS2MAS-GDR', 'https://picsum.photos/seed/railway2/800/600', 'Construction Progress');
