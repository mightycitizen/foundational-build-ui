---
to: "<%= css ? 'src/stories/components/' + type.toLowerCase().replaceAll(' ','-') + '/' + name.toLowerCase().replaceAll(' ','-') + '/' +  name.toLowerCase().replaceAll(' ','-')  + '.css' : null %>"
---
@reference "../../../../assets/css/app.css";

/*
  Same layer as Tailwind utilities, declared before output.css loads, so the
  cascade matches Tailwind CSS v3: more specific selectors here win, and
  utilities win ties.
*/
@layer theme, base, components, utilities;

@layer utilities {
  .<%= name.toLowerCase() %>{
  }
}
