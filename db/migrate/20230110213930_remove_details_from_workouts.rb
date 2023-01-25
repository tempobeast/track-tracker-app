class RemoveDetailsFromWorkouts < ActiveRecord::Migration[7.0]
  def change
    remove_column :workouts, :details
  end
end
