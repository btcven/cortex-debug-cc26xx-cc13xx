import { Extension, extensions, ExtensionContext, window } from 'vscode';
import * as path from 'path';

interface CortexDebug {
	registerSVDFile(expression: RegExp | string, path: string): void;
}

export function activate(context: ExtensionContext) {
        console.log('Congratulations, your extension "helloworld-sample" is now active!');

	const cortexDebug: Extension<CortexDebug> = <Extension<CortexDebug>>extensions.getExtension('marus25.cortex-debug');
	if (!cortexDebug) {
		window.showErrorMessage('Cortex-Debug Extension is not available for device support packages');
		return;
	}

	cortexDebug.activate().then((cdbg) => {
        cdbg.registerSVDFile(/^(CC|cc)1310(f|F)128.*/i, path.join(context.extensionPath, 'data', 'cc1310f128.svd'));
        cdbg.registerSVDFile(/^(CC|cc)1310(f|F)64.*/i, path.join(context.extensionPath, 'data', 'cc1310f64.svd'));
        cdbg.registerSVDFile(/^(CC|cc)2620(f|F)128.*/i, path.join(context.extensionPath, 'data', 'cc2620f128.svd'));
        cdbg.registerSVDFile(/^(CC|cc)2640(f|F)128.*/i, path.join(context.extensionPath, 'data', 'cc2640f128.svd'));
        cdbg.registerSVDFile(/^(CC|cc)2642(r|R)1(f|F).*/i, path.join(context.extensionPath, 'data', 'cc2642r1f.svd'));
        cdbg.registerSVDFile(/^(CC|cc)2652(p|P)1(f|F).*/i, path.join(context.extensionPath, 'data', 'cc2652p1f.svd'));
        cdbg.registerSVDFile(/^(CC|cc)2652(rb|RB)1(f|F).*/i, path.join(context.extensionPath, 'data', 'cc2652rb1f.svd'));
        cdbg.registerSVDFile(/^(CC|cc)1310(f|F)32.*/i, path.join(context.extensionPath, 'data', 'cc1310f32.svd'));
        cdbg.registerSVDFile(/^(CC|cc)1312(r|R)1(f|F)3.*/i, path.join(context.extensionPath, 'data', 'cc1312r1f3.svd'));
        cdbg.registerSVDFile(/^(CC|cc)2630(f|F)128.*/i, path.join(context.extensionPath, 'data', 'cc2630f128.svd'));
        cdbg.registerSVDFile(/^(CC|cc)2640(r|R)2(f|F).*/i, path.join(context.extensionPath, 'data', 'cc2640r2f.svd'));
        cdbg.registerSVDFile(/^(CC|cc)2650(f|F)128.*/i, path.join(context.extensionPath, 'data', 'cc2650f128.svd'));
        cdbg.registerSVDFile(/^(CC|cc)2652(r|R)1(f|F).*/i, path.join(context.extensionPath, 'data', 'cc2652r1f.svd;'));
	}, (error) => {
		console.log('Unable to activate cortexDebug');
	});
}

export function deactivate() {}