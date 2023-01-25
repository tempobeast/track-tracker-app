class AddDetailsToWorkouts < ActiveRecord::Migration[7.0]
  def change
    add_column :workouts, :details, :string, array: true, default: []
  end
end
