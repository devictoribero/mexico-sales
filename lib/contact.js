export const contactTel = "624 165 30 44";
export const contactTelSticked = contactTel.split(" ").join("");

export const whatsappHref = (
  text = "Hola Gabriela, le escribo porque me interesan algunos de sus productos."
) => {
  const whatsappDomain = `https://api.whatsapp.com/send`;
  return `${whatsappDomain}?phone=+52${contactTelSticked}&text=${text}`;
};

export const telHref = () => `tel:+52${contactTelSticked}`;
