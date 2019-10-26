class JsonWebToken
 class << self
   def encode(payload, exp = 24.hours.from_now)
   	key = Rails.application.secrets.secret_key_base ? Rails.application.secrets.secret_key_base : 'd80d13a2fc4ee42a8fbe7079e46ed82d73e8fc31627cb09907c3fef058b807234f1a32d3223161a222a90ed5d5d53615e58134f5e6ba8ba58ca6d113baa4d546'
     payload[:exp] = exp.to_i
     JWT.encode(payload,key)
   end

   def decode(token)
   	key = Rails.application.secrets.secret_key_base ? Rails.application.secrets.secret_key_base : 'd80d13a2fc4ee42a8fbe7079e46ed82d73e8fc31627cb09907c3fef058b807234f1a32d3223161a222a90ed5d5d53615e58134f5e6ba8ba58ca6d113baa4d546'
     body = JWT.decode(token, key)
     rescue
      nil
   end
 end
end