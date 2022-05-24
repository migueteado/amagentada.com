import styles from "./styles.module.css"

const ContactForm = () => {
  return (
    <>
      <div className={styles.ContactForm}>
        <form action="">
          <div className={styles.FormContainer}>
            <div>
              <input
                className={styles.FormInput}
                type="text"
                placeholder="Nombre"
              />
            </div>
            <div>
              <input
                className={styles.FormInput}
                type="email"
                name=""
                id=""
                placeholder="Email"
              />
            </div>
            <div className={styles.FormMatter}>
              <input
                className={styles.FormInput}
                type="text"
                name=""
                id=""
                placeholder="Asunto"
              />
            </div>
            <div className={styles.FormMessage}>
              <textarea
                className={styles.FormInput}
                name=""
                id=""
                cols={30}
                rows={10}
                placeholder="Mensaje"
              ></textarea>
            </div>
            <div className={styles.FormButtonContainer}>
              <input
                type="submit"
                value="Enviar"
                className={styles.FormButton}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default ContactForm
