Topic: Component vs Container

Why do dis?

If you separate concerns, your app will be easier to reason about, complexity will be mostly localized around the Smart components, and you should be left with more simple components. UI components will be more reusable.

Component (dumb component)
---------
1. Concerned with how things look
2. May contain both presentional and container components
3. Rarely have own state unless for UI manipulation 

Container (smart component)
---------
A container does data fetching and then renders its corresponding sub-component. That’s it.