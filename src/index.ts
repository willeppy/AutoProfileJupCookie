import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';
import { INotebookTracker } from '@jupyterlab/notebook';

import { Widget } from '@lumino/widgets';

// import App from './components/App.svelte';


/**
 * Initialization data for the AutoProfileJupCookie extension.
 */

const plugin: JupyterFrontEndPlugin<void> = {
  id: 'AutoProfileJupCookie:plugin',
  autoStart: true,
  activate: (
    app: JupyterFrontEnd,
    notebookTracker: INotebookTracker,
  ) => {

    console.log("Activating AutoProfile extension...")

    // make lumino widget and add to the left hand tab bar
    const widget = new Widget();
    widget.addClass('AutoProfileApp');
    widget.id = 'auto-profile-app';
    // this.title.label = 'AutoProfile View';
    widget.title.caption = 'AutoProfile';
    widget.title.iconClass = 'jp-SideBar-tabIcon myIcon';
    app.shell.add(widget, 'left', { rank: 600 });


    // new App({
    //   target: myView.node,
    //   props: {
    //     name: "Test name"
    //   }
    // });

    // console.log("myView: ", myView)

  },
  requires: [INotebookTracker],
};

export default plugin;
