class CreateLogEntries < ActiveRecord::Migration[7.0]
  def change
    create_table :log_entries do |t|
      t.integer :workout_rating
      t.float :mileage
      t.string :details
      t.string :notes
      t.integer :workout_id
      t.integer :athlete_id

      t.timestamps
    end
  end
end
