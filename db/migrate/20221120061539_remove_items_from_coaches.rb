class RemoveItemsFromCoaches < ActiveRecord::Migration[7.0]
  def change
    change_table(:coaches) do |t|
      t.remove :first_name
      t.remove :last_name
      t.remove :username
      t.remove :password_digest
    end
  end
end
