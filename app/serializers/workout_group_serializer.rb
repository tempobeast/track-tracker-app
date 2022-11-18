class WorkoutGroupSerializer < ActiveModel::Serializer
  attributes :id, :coach_id, :athlete_id, :name
end
