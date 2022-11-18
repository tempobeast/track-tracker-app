class AddTeamIdToWorkoutGroups < ActiveRecord::Migration[7.0]
  def change
    add_column :workout_groups, :team_id, :integer
  end
end
