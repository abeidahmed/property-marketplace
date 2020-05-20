module Types
  class UserType < Types::BaseObject
    field :id, ID, null: false
    field :first_name, String, null: false
    field :last_name, String, null: false
    field :full_name, String, null: false
    field :email, String, null: false
    field :password, String, null: false
    field :created_at, String, null: false
    field :updated_at, String, null: false

    def full_name
      "#{object.first_name} #{object.last_name}"
    end
  end
end
