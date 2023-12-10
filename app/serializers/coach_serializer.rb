class CoachSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :username, :password_digest, :type, :team_id, :workout_groups, :athletes

  belongs_to :workout_groups
  has_many :athletes, through: :workout_groups
  has_many :workouts
end
