class CreateWorkoutGroups < ActiveRecord::Migration[7.0]
  def change
    create_table :workout_groups do |t|
      t.integer :coach_id
      t.integer :athlete_id
      t.string :name

      t.timestamps
    end
  end
end
