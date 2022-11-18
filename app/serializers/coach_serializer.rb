class CoachSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :username, :password_digest, :team_id
end
