# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_01_10_214049) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "log_entries", force: :cascade do |t|
    t.integer "workout_rating"
    t.float "mileage"
    t.string "details"
    t.string "notes"
    t.integer "workout_id"
    t.integer "athlete_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "teams", force: :cascade do |t|
    t.string "name"
    t.string "img_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "username"
    t.string "password_digest"
    t.string "email"
    t.string "type"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "team_id"
  end

  create_table "workout_groups", force: :cascade do |t|
    t.integer "coach_id"
    t.integer "athlete_id"
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "team_id"
  end

  create_table "workouts", force: :cascade do |t|
    t.date "date"
    t.string "workout_type"
    t.integer "coach_id"
    t.integer "approx_duration"
    t.string "add_ons"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "details", default: [], array: true
  end

end
