class TeamsController < ApplicationController

    skip_before_action :authorize, except: [:destroy, :update]

    def index
        teams = Team.all
        render json: teams, status: :ok
    end

end
