![NPM Badge](https://badge.fury.io/js/rctx-contextmenu.svg)

# rctx-contextmenu
Context menu for React. [Live Demo](https://reachtokish.github.io/rctx-contextmenu/) | [Example Code](https://github.com/reachtokish/rctx-contextmenu/tree/master/example)

## Installation
```
npm install --save rctx-contextmenu
```

## Sample Usage
```html
<ContextMenuTrigger
  id="my-context-menu-1"
>
  <div className="box">
    Right Click On Me
  </div>
</ContextMenuTrigger>

<ContextMenu id="my-context-menu-1">
  <ContextMenuItem>Basic Menu Item 1</ContextMenuItem>
  <ContextMenuItem>Basic Menu Item 2</ContextMenuItem>
  <ContextMenuItem>Basic Menu Item 3</ContextMenuItem>
  <ContextMenuItem>Basic Menu Item 4</ContextMenuItem>
</ContextMenu>
```

## Options
### `<ContextMenu />`
<table class="table table-bordered table-striped">
  <thead>
  <tr>
    <th style="width: 60px;">Name</th>
    <th style="width: 50px;">Type</th>
    <th style="width: 10px;">Options</th>
    <th>Description</th>
  </tr>
  </thead>
  <tbody>
    <tr>
      <td>appendTo</td>
      <td>Element</td>
      <td>Should be a valid DOM element. <strong>Default: Enclosed element</strong></td>
      <td>Append context menu inside the passed element</td>
    </tr>
    <tr>
      <td>hideOnLeave</td>
      <td>Boolean</td>
      <td>true / false. <strong>Default: false</strong></td>
      <td>Hide contextmenu on blur or mouseOut.</td>
    </tr>
    <tr>
      <td>onMouseLeave</td>
      <td>Function</td>
      <td>() => {}</td>
      <td>Invoke onMouseLeave on blur or mouseOut.</td>
    </tr>
    <tr>
      <td>preventHideOnResize</td>
      <td>Boolean</td>
      <td>true / false. <strong>Default: false</strong></td>
      <td>Prevent hiding contextmenu from hiding on window resize.</td>
    </tr>
    <tr>
      <td>preventHideOnScroll</td>
      <td>Boolean</td>
      <td>true / false. <strong>Default: false</strong></td>
      <td>Prevent hiding contextmenu from hiding on scroll.</td>
    </tr>
  </tbody>
</table>

### `<ContextMenuItem />`
<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th style="width: 60px;">Name</th>
      <th style="width: 50px;">Type</th>
      <th style="width: 10px;">Options</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>onClick</td>
      <td>Function</td>
      <td>() => {}</td>
      <td>Fire onClick event.</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>Boolean</td>
      <td>true / False . Default False</td>
      <td>Disable menu item.</td>
    </tr>
    <tr>
      <td>preventClose</td>
      <td>Boolean</td>
      <td>true / False . Default False</td>
      <td>Context menu is closed as soon as an item is clicked.</td>
    </tr>
    <tr>
      <td>attributes</td>
      <td>Object</td>
      <td>Rest props</td>
      <td>-</td>
    </tr>
    <tr>
      <td>disableIfShiftIsPressed</td>
      <td>Boolean</td>
      <td>true / false. <strong>Default: false</strong></td>
      <td>Open browser default contextmenu if shift pressed while right click on trigger element.</td>
    </tr>
  </tbody>
</table>

### `<ContextMenuTrigger />`
<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th style="width: 60px;">Name</th>
      <th style="width: 50px;">Type</th>
      <th style="width: 10px;">Options</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>attributes</td>
      <td>Object</td>
      <td>{}</td>
      <td>Add addition props.</td>
    </tr>
    <tr>
      <td>disable</td>
      <td>true / false. <strong>Default: false</strong></td>
      <td>false</td>
      <td>Disable contextmenu and open browser default contextmenu.</td>
    </tr>
  </tbody>
</table>

## License
MIT License

<!-- onHide, onShow -->

<!-- ## `<SubMenu />` -->

<!-- , , preventHideOnContextMenu, className, programmatically hide show, animation - Not Done -->

<!-- ContextMenuTrigger - collect, holdToDisplay - Not Done -->