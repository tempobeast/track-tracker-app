class AthleteSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :username, :password_digest, :age, :team_id
end
