import { Handlers, PageProps } from "$fresh/server.ts";

export const handler: Handlers = {
    async GET(_, ctx) {
      const resp = await fetch('https://fakestoreapi.com/products');
      if (resp.status === 404) {
        return ctx.render(null);
      }
      const products = await resp.json();
      return products;
    },
  };

export default function Page(props: PageProps) {
    console.log(props, 'PROPS')
    
    return (
      <div>
        Esto funciona?
        {/* <h1>{props.data.title}</h1>
        <p>{props.data.category} stars</p> */}
      </div>
    );
  }