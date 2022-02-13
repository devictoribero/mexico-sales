export const contactTel = "624 165 30 44";
export const contactTelSticked = contactTel.split(" ").join("");
const whatsappDomain = `https://api.whatsapp.com/send`;

export const whatsappHref = (
  text = "Hola Gabriela, le escribo porque me interesan algunos de sus productos."
) => {
  return `${whatsappDomain}?phone=+52${contactTelSticked}&text=${text}`;
};

const productContactText =
  'Hola Gabriela! He visto los disitntos productos de la web y me ha gustado el "{productName}". Aun lo tienes?';
export const whatsappAskForPlant = (plantName) => {
  const text = productContactText.replace("{productName}", plantName);

  return `${whatsappDomain}?phone=+52${contactTelSticked}&text=${text}`;
};

export const telHref = () => `tel:+52${contactTelSticked}`;
