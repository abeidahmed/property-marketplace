class Mutations::LoginUser < Mutations::BaseMutation
  argument :email, String, required: true
  argument :password, String, required: true

  field :user, Types::UserType, null: true
  field :token, String, null: true

  def resolve(email:, password:)
    user = User.find_by(email: email.downcase)

    throw_error(user)

    authenticated_user = user.authenticate(password)

    throw_error(authenticated_user)

    secret_key = Rails.application.secrets.secret_key_base
    data_to_encode = { user_id: "#{authenticated_user.id}" }
    token = JWT.encode data_to_encode, secret_key, "HS256"

    {
      user: authenticated_user,
      token: token
    }
  end

  def throw_error(error_type)
    raise GraphQL::ExecutionError, "Invalid credentials" unless error_type
  end
end