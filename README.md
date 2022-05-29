- React Router is a fully-featured client and server-side routing library for React

- React Router is compatible with React >= 16.8.

- keep tutorial quick and to the point

- dig into somethng to get a deeper understanding

# vite

- npm init vite@latest router-tutorial --template react

- npm install react-router-dom@6

navigation. Side note: don't take the styling too seriously in this tutorial, we're just using inline styles for convenience, style your apps however you want.

Link is changing the URL without causing a full page reload.

You may have noticed when clicking the links that the layout in App disappears. Repeating shared layouts is a pain in the neck

irst let's nest the routes. Right now the expenses and invoices routes are siblings to the app, we want to make them children of the app route:

Now click around again. The parent route (App.js) persists while the <Outlet> swaps between the two child routes (<Invoices> and <Expenses>)!

As we'll see later, this works at any level of the route hierarchy and is incredibly powerful.

Now we can use it in the invoices route. Let's also add a bit of styling to get a sidebar nav layout going on. Feel free to copy/paste all of this, but take special note of the <Link> elements to prop:

That didn't go as you might have expected. If you click those links the page goes blank! That's because none of the routes we've defined match a URL like the ones we're linking to: "/invoices/123".

Reading URL Params
Alright, back to the individual invoice URLs. Let's add a route for a specific invoice. We just visited some URLs like "/invoices/1998" and "/invoices/2005", let's make a new component at src/routes/invoice.jsx to render at those URLs:

export default function Invoice() {
return <h2>Invoice #???</h2>;
}
We'd like to render the invoice number instead of "???". Normally in React you'd pass this as a prop: <Invoice invoiceId="123" />, but you don't control that information because it comes from the URL.

"URL param", meaning it can match any value as long as the pattern is the same.

- need to add an outlet to the parent layout route

And now back in invoice.jsx we use the param to look up an invoice and display more information:

- parseInt

- data lookups to use a number type, but URL params are always string.

- index route shares the path of the parent

- Index routes render in the parent routes outlet at the parent route's path.

- Index routes match when a parent route matches but none of the other children match.

- Index routes are the default child route for a parent route.

- Index routes render when the user hasn't clicked one of the items in a navigation list yet.

It's very common, especially in navigation lists, to display the link as the active link the user is looking at. Let's add this treatment to our invoices list by swapping out Link for NavLink.

We changed the color of our link by looking at the isActive
value that NavLink passed to our styling function.
You can do the same thing with className on NavLink:

Search Params
Search params are like URL params but they sit in a different position in the URL. Instead of being in the normal URL segments separated by /, they are at the end after a ?. You've seen them across the web like "/login?success=1" or "/shoes?brand=nike&sort=asc&sortby=price".

React Router makes it easy to read and manipulate the search params with useSearchParams. It works a lot like React.useState() but stores and sets the state in the URL search params instead of in memory.

Let's see it in action by adding a little filter on the invoices nav list.

Check this out, as the user types:

setSearchParams() is putting the ?filter=... search params in the URL and rerendering the router.
useSearchParams is now returning a URLSearchParams with "filter" as one of its values.
We set the value of the input to whatever is in the filter search param (it's just like useState but in the URLSearchParams instead!)
We filter our list of invoices based on the filter search param.
Custom Behavior
If you filter the list and then click a link, you'll notice that the list is no longer filtered and the search param is cleared from the <input> and the URL. You might want this, you might not! Maybe you want to keep the list filtered and keep the param in the URL.

We can persist the query string when we click a link by adding it to the link's href. We'll do that by composing NavLink and useLocation from React Router into our own QueryNavLink (maybe there's a better name, but that's what we're going with today).

import { useLocation, NavLink } from "react-router-dom";

function QueryNavLink({ to, ...props }) {
let location = useLocation();
return <NavLink to={to + location.search} {...props} />;
}
You can put that code anywhere you want in your app and then replace your NavLink in src/routes/invoices.jsx with QueryNavLink and you're done.

Like useSearchParams, useLocation returns a location that tells us information about the URL. A location looks something like this:

{
pathname: "/invoices",
search: "?filter=sa",
hash: "",
state: null,
key: "ae4cz2j"
}
With that information, the task in QueryNavLink is pretty simple: add the location.search onto the to prop. You might be thinking, "Geez, seems like this should be a built-in component of React Router or something?". Well, let's look at another example.

What if you had links like this on an ecommerce site.

<Link to="/shoes?brand=nike">Nike</Link>
<Link to="/shoes?brand=vans">Vans</Link>
And then you wanted to style them as "active" when the url search params match the brand? You could make a component that does exactly that pretty quickly with stuff you've learned in this tutorial:

function BrandLink({ brand, ...props }) {
let [params] = useSearchParams();
let isActive = params.getAll("brand").includes(brand);
return (
<Link
style={{ color: isActive ? "red" : "" }}
to={`/shoes?brand=${brand}`}
{...props}
/>
);
}
That's going to be active for "/shoes?brand=nike" as well as "/shoes?brand=nike&brand=vans". Maybe you want it to be active when there's only one brand selected:

let brands = params.getAll("brand");
let isActive =
brands.includes(brand) && brands.length === 1;
// ...
Or maybe you want the links to be additive (clicking Nike and then Vans adds both brands to the search params) instead of replacing the brand:

function BrandLink({ brand, ...props }) {
let [params] = useSearchParams();
let isActive = params.getAll("brand").includes(brand);
if (!isActive) {
params.append("brand", brand);
}
return (
<Link
style={{ color: isActive ? "red" : "" }}
to={`/shoes?${params.toString()}`}
{...props}
/>
);
}
Or maybe you want it to add the brand if it's not there already and remove it if it's clicked again!

function BrandLink({ brand, ...props }) {
let [params] = useSearchParams();
let isActive = params.getAll("brand").includes(brand);
if (!isActive) {
params.append("brand", brand);
} else {
params = new URLSearchParams(
Array.from(params).filter(
([key, value]) => key !== "brand" || value !== brand
)
);
}
return (
<Link
style={{ color: isActive ? "red" : "" }}
to={`/shoes?${params.toString()}`}
{...props}
/>
);
}
As you can see, even in this fairly simple example there are a lot of valid behaviors you might want. React Router doesn't try to solve every use-case we've ever heard of directly. Instead, we give you the components and hooks to compose whatever behavior you need.

Navigating Programmatically
Okay, back to our app. Hang in there, you're almost done!

Most of the time the URL changes is in response to the user clicking a link. But sometimes you, the programmer, want to change the URL. A very common use case is after a data update like creating or deleting a record.

Let's add a button that marks the invoice as paid and then navigates to the index route.

First you can copy and paste this function that deletes an invoice from our fake data store:

export function deleteInvoice(number) {
invoices = invoices.filter(
(invoice) => invoice.number !== number
);
}
Now let's add the delete button, call our new function, and navigate to the index route:

import {
useParams,
useNavigate,
useLocation,
} from "react-router-dom";
import { getInvoice, deleteInvoice } from "../data";

export default function Invoice() {
let navigate = useNavigate();
let location = useLocation();
let params = useParams();
let invoice = getInvoice(parseInt(params.invoiceId, 10));

return (
<main style={{ padding: "1rem" }}>
<h2>Total Due: {invoice.amount}</h2>
<p>
{invoice.name}: {invoice.number}
</p>
<p>Due Date: {invoice.due}</p>
<p>
<button
onClick={() => {
deleteInvoice(invoice.number);
navigate("/invoices" + location.search);
}} >
Delete
</button>
</p>
</main>
);
}
Notice we used useLocation again to persist the query string by adding location.search to the navigation link.

Getting Help
Congrats! You're all done with this tutorial. We hope it helped you get your bearings with React Router.

If you're having trouble, check out the Resources page to get help. Good luck!

===

- Configuring Routes

had to order your routes a certain way to get the right one to render when multiple routes matched an ambiguous URL.

pick the most specific match so you don't have to worry about that anymore

Navigation
Use Link to let the user change the URL or useNavigate to do it yourself (like after form submissions):

```js
import { useNavigate } from "react-router-dom"

function Invoices() {
  let navigate = useNavigate()
  return (
    <div>
      <NewInvoiceForm
        onSubmit={async (event) => {
          let newInvoice = await createInvoice(event.target)
          navigate(`/invoices/${newInvoice.id}`)
        }}
      />
    </div>
  )
}
```

Reading URL Parameters
Use :style syntax in your route path and useParams() to read them:

Note that the path segment :invoiceId and the param's key params.invoiceId match up.

A very common use-case is fetching data when the component renders:

```js
function Invoice() {
  let { invoiceId } = useParams()
  let invoice = useFakeFetch(`/api/invoices/${invoiceId}`)
  return invoice ? (
    <div>
      <h1>{invoice.customerName}</h1>
    </div>
  ) : (
    <Loading />
  )
}
```

Nested Routes

- vast majority of your layouts are coupled to segments of the URL and React Router embraces this fully.

- Routes can be nested inside one another, and their paths will nest too (child inheriting the parent).

Notice the inner component that changed with the URL (<SentInvoices> and <Invoice>). The parent route (<Invoices>) is responsible for making sure the matching child route is rendered with <Outlet>. Here's the full example:

The nested url segments map to nested component trees. This is perfect for creating UI that has persistent navigation in layouts with an inner section that changes with the URL. If you look around the web you'll notice many websites (and especially web apps) have multiple levels of layout nesting.

Here's another example of a root layout with navigation that persists while the inner page swaps out with the URL:

Index Routes
Index routes can be thought of as "default child routes". When a parent route has multiple children, but the URL is just at the parent's path, you probably want to render something into the outlet.

there is no child route to render there. For this we can add an index route:

Relative Links
Relative <Link to> values (that do not begin with a /) are relative to the path of the route that rendered them. The two links below will link to /dashboard/invoices and /dashboard/team because they're rendered inside of <Dashboard>. This is really nice when you change a parent's URL or re-arrange your components because all of your links automatically update.

Descendant <Routes>
You can render a <Routes> element anywhere you need one, including deep within the component tree of another <Routes>. These will work just the same as any other <Routes>, except they will automatically build on the path of the route that rendered them. If you do this, make sure to put a \* at the end of the parent route's path. Otherwise, the parent route won't match the URL when it is longer than the parent route's path, and your descendant <Routes> won't ever show up.

===

The sx prop

- sx keys are mapped to specific properties of the theme

```js
import * as React from "react"
import { Box, ThemeProvider, createTheme } from "@mui/system"

const theme = createTheme({
  palette: {
    background: {
      paper: "#fff"
    },
    text: {
      primary: "#173A5E",
      secondary: "#46505A"
    },
    action: {
      active: "#001E3C"
    },
    success: {
      dark: "#009688"
    }
  }
})

export default function Example() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          bgcolor: "background.paper",
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          minWidth: 300
        }}
      >
        <Box sx={{ color: "text.secondary" }}>Sessions</Box>
        <Box sx={{ color: "text.primary", fontSize: 34, fontWeight: "medium" }}>98.3 K</Box>
        <Box
          sx={{
            color: "success.dark",
            display: "inline",
            fontWeight: "bold",
            mx: 0.5,
            fontSize: 14
          }}
        >
          +18.77%
        </Box>
        <Box sx={{ color: "text.secondary", display: "inline", fontSize: 14 }}>vs. last week</Box>
      </Box>
    </ThemeProvider>
  )
}
```

- [Borders]()

  - `<Box sx={{ border: 1 }} />`

  - `<Box sx={{ borderColor: 'primary.main' }} /> `

  - `<Box sx={{ borderRadius: 2 }} />`

- [Display]() : `<Box sx={{ displayPrint: 'none' }} />`

- [Grid]() : `<Box sx={{ gap: 2 }} />`

- [Palette]()

  - `<Box sx={{ color: 'primary.main' }} />`

  - `<Box sx={{ bgcolor: 'primary.main' }} />`

- [Positions]() : `<Box sx={{ zIndex: 'tooltip' }} />`

- [Shadows]() : `<Box sx={{ boxShadow: 1 }} />`

- [Sizing]()

  - `<Box sx={{ width: 1/2 }} />`

  - `<Box sx={{ width: 20 }} />`

- [Spacing]() : `<Box sx={{ margin: 2 }} />`

- [Typography]()

  - `<Box sx={{ fontWeight: 'fontWeightLight' }} />`

  - `<Box sx={{ fontWeight: 'light' }} />`

  - `<Box sx={{ typography: 'body1' }} />`

- Callback Values

  - Each property in the sx prop can receive a **function callback** as a value. This is useful when you want to use the theme for calculating some value.

  - `<Box sx={{ height: (theme) => theme.spacing(10) }} />`

```js
<Box
  sx={(theme) => ({
    ...theme.typography.body,
    color: theme.palette.primary.main
  })}
/>
```

- Array values

```js
<Box
  sx={[
    {
      "&:hover": {
        color: "red",
        backgroundColor: "white"
      }
    },
    foo && {
      "&:hover": { backgroundColor: "grey" }
    },
    bar && {
      "&:hover": { backgroundColor: "yellow" }
    }
  ]}
/>
```

```js
<Box
  sx={[
    { mr: 2, color: "red" },
    (theme) => ({
      "&:hover": {
        color: theme.palette.primary.main
      }
    })
  ]}
/>
```

MUI comes with dozens of ready-to-use components in the core. These components are an incredible starting point but when it comes to making your site stand out with a custom design, it can be simpler to start from an unstyled state. Introducing the system:

The system lets you quickly build custom UI components leveraging the values defined in your theme.

====

Too many type sizes and styles at once can spoil any layout. A typographic scale has a limited set of type sizes that work well together along with the layout grid.

- [theme customization]()

- Fontsource can be configured to load specific subsets, weights and styles. MUI default typography configuration only relies on 300, 400, 500, and 700 font weights.

===

- Image lists display a collection of images in an organized grid

  - Standard image lists are best for items of equal importance. They have a uniform container size, ratio, and spacing.

  - Quilted image lists emphasize certain items over others in a collection. They create hierarchy using varied container sizes and ratios.

  - Woven image lists use alternating container ratios to create a rhythmic layout. A woven image list is best for browsing peer content.

  - Image list with title bars : the use of the ImageListItemBar to add an overlay to each item. The overlay can accommodate a title, subtitle and secondary action - in this example an IconButton.

```js
export default function TitlebarBelowImageList() {
  return (
    <ImageList sx={{ width: 500, height: 450 }}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img src={`${item.img}?w=248&fit=crop&auto=format`} srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`} alt={item.title} loading="lazy" />
          <ImageListItemBar title={item.title} subtitle={<span>by: {item.author}</span>} position="below" />
        </ImageListItem>
      ))}
    </ImageList>
  )
}
```
