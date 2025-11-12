/// <reference path="./lib/mfiles-uix-v2.d.ts" />



/**
 * Executed by the UIX when a ShellUI module is started.
 * This is the main entry point for your UIX application.
 * 
 * @param {MFiles.ShellUI} shellUI - The shell UI object that was created.
 */

function OnNewShellUI( shellUI ) {

    /// <summary>Executed by the UIX when a ShellUI module is started.</summary>
    /// <param name="shellUI" type="MFiles.ShellUI">The shell UI object which was created.</param>

    // This is the start point of a ShellUI module.

    // Register to be notified when a new shell frame (MFiles.Event.NewShellFrame) is created.
    shellUI.Events.Register(
        MFiles.Event.NewShellFrame,
        handleNewShellFrame );
}


/**
 * Handles the NewShellFrame event.
 * Called when a new shell frame (window/tab) is created.
 * 
 * @param {MFiles.ShellFrame} shellFrame - The shell frame object that was created.
 */

function handleNewShellFrame( shellFrame ) {

    /// <summary>Handles the OnNewNormalShellFrame event for an IShellUI.</summary>
    /// <param name="shellFrame" type="MFiles.ShellFrame">The shell frame object which was created.</param>

    // The shell frame was created but it cannot be used yet.
    // The following line would throw an exception ("The object cannot be accessed, because it is not ready."):
    // shellFrame.ShowMessage("A shell frame was created");

    // Register to be notified when the shell frame is started.
    shellFrame.Events.Register(
        MFiles.Event.Started,
        getShellFrameStartedHandler( shellFrame ) );
}


/**
 * Returns a function which handles the Started event for a ShellFrame.
 * This pattern allows us to maintain a reference to the shellFrame in a closure.
 * 
 * @param {MFiles.ShellFrame} shellFrame - The shell frame to handle
 * @returns {Function} Event handler function
 */


function getShellFrameStartedHandler( shellFrame )  {

    /// <summary>Returns a function which handles the OnStarted event for an IShellFrame.</summary>

    // The shell frame is now started and can be used.

    return async () => {

        // Create a command (button).  Note that it is not yet visible.
        const commandOneId = await shellFrame.Commands.CreateCustomCommand( "My First Command" );

        // Add the first command to the main menu.
        await shellFrame.Commands.AddCustomCommandToMenu( commandOneId, MFiles.MenuLocation.MenuLocation_TopPaneMenu, 1 );
    };
}