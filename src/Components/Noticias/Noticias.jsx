import React from "react";
import style from "./Noticias.module.css";

const Noticias = () => {
  return (
    <div id="Noticias" className={style.Noticias}>
      <h2>Noticias</h2>
      <div className={style.Noticias2}>
        <iframe
          src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fbomberosvoluntarios.stacatalinaholmberg%2Fposts%2Fpfbid02HgbbPFfmXvTQCM5nKn5XMSKVtHqwBZNQ16dnjPKo15HvNboojF3iPcwBAWtjH7Qkl&show_text=true&width=500"
          width={500}
          height={535}
          style={{ background: "white" }}
          frameborder="0"
          allowfullscreen="true"
          title="publicacion1"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </div>
      <div className={style.Noticias2}>
        <iframe
          src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fbomberosvoluntarios.stacatalinaholmberg%2Fposts%2Fpfbid0Y7hC3vcSvJDX1uDHj6hy4Pj3V3YXKheZ7B83bk2n1zz4ZTrJexC4hVXAiiioaXmzl&show_text=true&width=500"
          width={500}
          height={535}
          style={{ background: "white" }}
          frameborder="0"
          allowfullscreen="true"
          title="publicacion2"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </div>
      <div className={style.Noticias2}>
        <iframe
          src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fbomberosvoluntarios.stacatalinaholmberg%2Fposts%2Fpfbid02kXH5t5fJWmtYZ4RP5QfZp8KLzEJ7QoZPXfyny9d3x3gE2iTekQymaXgHuT4YhLbgl&show_text=true&width=500"
          width={500}
          height={535}
          style={{ background: "white" }}
          title="publicacion3"
          frameborder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
};

export default Noticias;
