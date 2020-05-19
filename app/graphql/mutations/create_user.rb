class Mutations::CreateUser < Mutations::BaseMutation
  argument :email, String, required: true
  argument :first_name, String, required: true
  argument :last_name, String, required: true
  argument :password, String, required: true

  field :user, Types::UserType, null: true
  field :token, String, null: true

  def resolve(email:, first_name:, last_name:, password:)
    user = User.new(email: email, first_name: first_name, last_name: last_name, password: password)

    if user.save
      secret_key = Rails.application.secrets.secret_key_base
      data_to_encode = { user_id: "#{user.id}" }
      token = JWT.encode data_to_encode, secret_key, "HS256"
      {
        user: user,
        token: token
      }
    else
      {
        user: nil,
        token: nil
      }
      raise GraphQL::ExecutionError, user.errors.full_messages.join(", ")
    end
  end
end