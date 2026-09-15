import { Layer, Box, Text, TextInput, TextArea, Button } from "grommet";
import { Down, Send, User, MailOption } from "grommet-icons";
import React from "react";
import { useToast } from "../utils/ToastUtils";

const CONTACT_EMAIL = "brennanhonorio@gmail.com";

const ContactLayer = ({ setContactOpen }) => {
   const { showToast } = useToast();
   const [submitting, setSubmitting] = React.useState(false);

   const handleToastNotif = (alertLevel, label, description, duration) => {
      showToast({
         alertLevel: alertLevel,
         label: label,
         description: description,
         duration: duration,
      });
   };

   // Opens the visitor's own email client with the message pre-filled, instead of
   // relying on a third-party form-submission service (which needs its own account).
   function sendEmail(e) {
      e.preventDefault();
      setSubmitting(true);

      const name = (e.target.from_name.value || "").trim();
      const fromEmail = (e.target.from_email.value || "").trim();
      const message = (e.target.message.value || "").trim();

      const subject = encodeURIComponent(`Portfolio message from ${name || "your site"}`);
      const body = encodeURIComponent(
         `${message}\n\n—\nFrom: ${name || "(no name given)"}\nReply to: ${
            fromEmail || "(no email given)"
         }`,
      );

      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

      setSubmitting(false);
      handleToastNotif(
         "info",
         "Opening your email app...",
         "Finish sending it from there!",
         6500,
      );
      setContactOpen(false);
   }

   return (
      <Layer
         onClickOutside={() => setContactOpen(false)}
         animate
         modal
         responsive={false}
         margin="xsmall"
      >
         <form onSubmit={sendEmail}>
            <Box align="center" justify="center" pad="xsmall" gap="small" width="large">
               <Box
                  direction="row"
                  gap="small"
                  align="start"
                  justify="start"
                  pad="xsmall"
                  fill="horizontal"
                  border={{ side: "bottom" }}
               >
                  <Down size="medium" color="border" onClick={() => setContactOpen(false)}></Down>
                  <Text>Get in touch</Text>
               </Box>
               <Box align="center" justify="center" gap="small" fill="horizontal">
                  <Box align="start" justify="start" direction="row" gap="small" fill="horizontal">
                     <Box align="center" justify="center">
                        <TextInput
                           icon={<User />}
                           name="from_name"
                           id="from_name"
                           placeholder="Name"
                        />
                     </Box>
                     <Box align="center" justify="center">
                        <TextInput
                           icon={<MailOption />}
                           name="from_email"
                           id="from_email"
                           placeholder="Email"
                        />
                     </Box>
                  </Box>
                  <TextArea
                     name="message"
                     id="message"
                     placeholder="What's on your mind?"
                     resize="vertical"
                  />
               </Box>
               <Box align="end" justify="center" fill="horizontal">
                  <Button type="submit" label="Send it" icon={<Send />} primary busy={submitting} />
               </Box>
            </Box>
         </form>
      </Layer>
   );
};

export default ContactLayer;
