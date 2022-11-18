class CreateWorkouts < ActiveRecord::Migration[7.0]
  def change
    create_table :workouts do |t|
      t.date :date
      t.string :workout_type
      t.integer :coach_id
      t.string :details
      t.integer :approx_duration
      t.string :add_ons

      t.timestamps
    end
  end
end
