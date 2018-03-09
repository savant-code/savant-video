class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def render_json_dump(obj, opts = nil)
    opts ||= {}
    if opts[:rest_serializer]
      obj['__rest_serializer'] = "1"
      opts.each do |k, v|
        obj[k] = v if k.to_s.start_with?("refresh_")
      end

      obj['extras'] = opts[:extras] if opts[:extras]
      obj['meta'] = opts[:meta] if opts[:meta]
    end

    render json: MultiJson.dump(obj), status: opts[:status] || 200
  end

  private
    def set_object_params(object)
      new_object = {}
      object["data"]["attributes"].each do |parameter|
        new_object[parameter.to_sym] = object["data"]["attributes"][parameter]
      end
      new_object
    end
end
