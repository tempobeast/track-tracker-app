class AthleteSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :username, :team, :type, :workout_list
  
end
