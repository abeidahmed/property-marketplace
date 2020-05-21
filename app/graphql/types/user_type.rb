module Types
  class UserType < Types::BaseObject
    field :id, ID, null: false
    field :full_name, String, null: false
    field :email, String, null: false
    field :password, String, null: false
    field :created_at, DateTimeType, null: false
    field :updated_at, DateTimeType, null: false

    def full_name
      "#{object.first_name} #{object.last_name}"
    end
  end
end
