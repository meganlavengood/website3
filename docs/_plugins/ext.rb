require 'jekyll/scholar'
# Contributed by @mfenner as markdown_links.rb
# See https://github.com/inukshuk/jekyll-scholar/issues/30
# modified to generate html instead of markdown by @rawlins

require 'uri'

module Jekyll
  class Scholar
    class HtmlLinks < BibTeX::Filter
      URL_PATTERN = URI.regexp(['http', 'https', 'ftp'])
      def apply(value)
        value.to_s.gsub(URL_PATTERN) {
          "<a href=\"#{$&}\">#{$&}</a>"
        }
      end
    end
  end
end

module Jekyll
  class Scholar
    class DOILinks < BibTeX::Filter
      DOI_FILTER = Regexp.new("^10\\.\\d{4,9}/[-._;()/:A-Z0-9]+$", Regexp::IGNORECASE)
      def apply(value)
        value.to_s.gsub(DOI_FILTER) {
          "<a href=\"https://doi.org/#{$&}\">#{$&}</a>"
        }
      end
    end
  end
end

