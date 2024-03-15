import sanitizeHtml from 'sanitize-html';

export const sanitizeText = (html) => {
  const sanitizeConf = {
    allowedTags: ['ul', 'ol', 'li', 's', 'u', 'b', 'i', 'strong', 'span', 'h1', 'h2', 'p'],
    allowedAttributes: {
      p: ['style', 'class'],
      strong: ['style'],
      h1: ['style'],
      h2: ['style'],
      ul: ['style'],
      ol: ['style'],
      li: ['style'],
      span: ['style', 'class'],
    },
    parseStyleAttributes: false,
  };

  return sanitizeHtml(html, sanitizeConf);
};
