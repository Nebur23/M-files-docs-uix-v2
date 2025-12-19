# M-Files UIX TypeScript Definitions

> **Author:** Nebur23  
> Comprehensive TypeScript definitions for M-Files User Interface Extensibility Framework (UIX)

## 📖 Overview

This project provides complete TypeScript type definitions for the M-Files UIX framework, enabling IntelliSense, type checking, and better developer experience when building M-Files vault applications using JavaScript.

## ✨ Features

- 🎯 **Full IntelliSense Support** - Get autocomplete suggestions for all M-Files UIX APIs
- 📝 **Comprehensive JSDoc Comments** - Detailed documentation for every method and property
- ✅ **Type Safety** - Catch errors at development time with TypeScript type checking
- 🔍 **Parameter Validation** - Know exactly what parameters each method expects
- 🚀 **Better Developer Experience** - Write M-Files UIX applications faster and with fewer bugs

## 🚀 Quick Start

### For New Projects

1. **Copy the type definitions** to your M-Files UIX project:
   ```
   your-project/
   ├── interfaces/          # Copy this entire folder
   ├── types/              # Copy this entire folder
   ├── index.d.ts          # Copy this file
   ├── jsconfig.json       # Copy this file
   └── main.js             # Your application code
   ```

2. **Add a reference** to the type definitions at the top of your JavaScript files:
   ```javascript
   /// <reference path="./index.d.ts" />
   ```

3. **Start coding** with full IntelliSense support!

### For Existing Projects

1. **Copy the type definition folders** into your existing project:
   - `interfaces/` folder
   - `types/` folder
   - `index.d.ts` file

2. **Create or update `jsconfig.json`** in your project root:
   ```json
   {
     "compilerOptions": {
       "target": "es2020",
       "module": "esnext",
       "lib": ["es2020", "dom"],
       "allowJs": true,
       "checkJs": true,
       "skipLibCheck": true,
       "esModuleInterop": true
     },
     "include": [
       "./**/*.js",
       "./**/*.ts",
       "./types/**/*.d.ts",
       "./interfaces/**/*.d.ts",
       "index.d.ts"
     ],
     "exclude": [
       "node_modules"
     ]
   }
   ```

3. **Add the reference directive** at the top of your JavaScript files:
   ```javascript
   /// <reference path="./index.d.ts" />
   ```

4. **Restart VS Code** or reload the window to activate IntelliSense.

## 💡 Usage Examples

### Basic Example with IntelliSense

```javascript
/// <reference path="./index.d.ts" />

/**
 * @param {IShellUI} shellUI - The shell UI object
 */
function OnNewShellUI(shellUI) {
    // IntelliSense will now suggest all available methods and properties
    shellUI.Events.Register(
        MFiles.Event.NewShellFrame,
        handleNewShellFrame
    );
}

/**
 * @param {IShellFrame} shellFrame - The shell frame object
 */
function handleNewShellFrame(shellFrame) {
    shellFrame.Events.Register(
        MFiles.Event.Started,
        async () => {
            // Full IntelliSense for all Commands methods
            const cmdId = await shellFrame.Commands.CreateCustomCommand("My Command");
            await shellFrame.Commands.AddCustomCommandToMenu(
                cmdId,
                MFiles.MenuLocation.MenuLocation_TopPaneMenu,
                1
            );
        }
    );
}
```

### Using Vault Extension Methods

```javascript
/// <reference path="./index.d.ts" />

/**
 * Check if an extension method is available
 * @param {IShellUI} shellUI
 */
async function checkExtensionMethod(shellUI) {
    // IntelliSense shows all parameters and return types
    const result = await shellUI.Vault.VaultExtensionMethodsOperations.IsExtensionMethodAvailable({
        method_identifier: "MyExtensionMethod"
    });
    
    if (result.exists && result.is_active) {
        console.log("Extension method is available and active");
    }
}

/**
 * Run a vault extension method
 * @param {IShellUI} shellUI
 */
async function runExtensionMethod(shellUI) {
    const result = await shellUI.Vault.VaultExtensionMethodsOperations.RunExtensionMethod({
        application_id: "00000000-0000-0000-0000-000000000000",
        extension: "MyExtension",
        instance: "MyInstance",
        method_name: "MyMethod",
        input: JSON.stringify({ data: "example" }),
        compressed_input: new Uint8Array()
    });
    
    console.log("Method output:", result.output);
}
```

### Working with Dashboard

```javascript
/// <reference path="./index.d.ts" />

/**
 * @param {IDashboard} dashboard
 */
function customizeDashboard(dashboard) {
    // IntelliSense for all dashboard methods
    dashboard.Events.Register(
        MFiles.Event.Started,
        async () => {
            const customContent = await dashboard.CreateCustomContent("My Custom Panel");
            // Full type safety for all operations
        }
    );
}
```

## 📁 Project Structure

```
M-files-docs-uix-v2/
├── interfaces/              # TypeScript interface definitions
│   ├── ICommands.d.ts      # Command operations
│   ├── IDashboard.d.ts     # Dashboard operations
│   ├── IEvents.d.ts        # Event handling
│   ├── ISearchPane.d.ts    # Search pane operations
│   ├── IShellFrame.d.ts    # Shell frame operations
│   ├── IShellItems.d.ts    # Shell items operations
│   ├── IShellListing.d.ts  # Shell listing operations
│   ├── IShellPaneContainer.d.ts
│   ├── IShellPaneTab.d.ts
│   ├── IShellUI.d.ts       # Main ShellUI interface
│   ├── IWindow.d.ts        # Window operations
│   ├── ICommonFunctions.d.ts
│   └── types.d.ts          # Shared types and interfaces
├── types/
│   └── mfiles-enums.d.ts   # M-Files enumerations
├── index.d.ts              # Main entry point
├── jsconfig.json           # TypeScript/JavaScript configuration
├── appdef.xml              # M-Files application definition
└── main.js                 # Example implementation
```

## 🔧 Configuration

### jsconfig.json Explained

The `jsconfig.json` file is **essential** for proper IntelliSense and type checking:

- **`checkJs: true`** - Enables type checking in JavaScript files
- **`allowJs: true`** - Allows JavaScript files to be processed
- **`target: "es2020"`** - Sets the JavaScript language version
- **`lib: ["es2020", "dom"]`** - Includes ES2020 and DOM type definitions

**Do not remove this file** - it's required for the type definitions to work correctly in your JavaScript files.

## 🎯 Benefits

### Before (Without Type Definitions)
```javascript
// No autocomplete, no type checking
shellFrame.Commands.CreateCustomCommand(/* What parameters? */);
```

### After (With Type Definitions)
```javascript
// Full IntelliSense with parameter hints and documentation
shellFrame.Commands.CreateCustomCommand(name); // ✓ Shows: (name: string) => Promise<string>
```

## 🐛 Troubleshooting

### IntelliSense Not Working?

1. **Check the reference directive** is at the top of your JS file:
   ```javascript
   /// <reference path="./index.d.ts" />
   ```

2. **Verify jsconfig.json exists** in your project root

3. **Reload VS Code window**: Press `Ctrl+Shift+P` → "Reload Window"

4. **Check file paths** in `index.d.ts` match your project structure

### Type Errors in JavaScript?

If you see unexpected type errors, you can:
- Add `// @ts-ignore` above the line to suppress specific errors
- Set `"checkJs": false` in `jsconfig.json` to disable type checking (not recommended)

## 📚 Additional Resources

- [M-Files Developer Portal](https://developer.m-files.com/)
- [M-Files UIX Documentation](https://developer.m-files.com/Frameworks/User-Interface-Extensibility-Framework/)
- [TypeScript JSDoc Reference](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html)

## 🤝 Contributing

Found an issue or want to improve the type definitions? Contributions are welcome!

1. Fork the repository
2. Make your changes
3. Test with a real M-Files UIX project
4. Submit a pull request

## 📄 License

This project provides type definitions for the M-Files UIX framework. Please refer to M-Files licensing for the actual framework usage.

## 👤 Author

**Nebur23**

---

**Happy Coding with M-Files UIX! 🚀**
