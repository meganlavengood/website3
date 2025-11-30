module Jekyll
  module DOIConverter
    def doi_linkify(input)
      input.gsub(/(https?:\/\/doi\.org\/[^\s"<]+)/i) do |doi_url|
        %(<a href="#{doi_url}">#{doi_url}</a>)
      end
    end
  end
end

Liquid::Template.register_filter(Jekyll::DOIConverter)