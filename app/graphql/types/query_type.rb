module Types
  class QueryType < Types::BaseObject
    description "Get all the users"
    field :users, [Types::UserType], null: false do
      argument :search, String, required: false
    end

    def users(search:)
      User.search(search)
    end

    description "Get a specific user with its id"
    field :user, Types::UserType, null: false do
      argument :id, ID, required: true
    end

    def user(id:)
      User.find(id)
    end

    description "Get the current user if logged in"
    field :current_user, Types::UserType, null: true

    def current_user
      raise GraphQL::ExecutionError, "You need to authenticate to perform this action" if context[:current_user].nil?
      context[:current_user]
    end
  end
end
