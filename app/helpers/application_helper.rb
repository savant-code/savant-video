module ApplicationHelper
  def preload_script(script)
    path = asset_path("#{script}.js")

    "<link rel='preload' href='#{path}' as='script'/>
    <script src='#{path}'></script>".html_safe
  end
end
