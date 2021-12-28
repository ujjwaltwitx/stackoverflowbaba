import * as vscode from 'vscode';
export function activate(context: vscode.ExtensionContext) {
	console.log("Hello form here");
	let disposable = vscode.commands.registerCommand('stackoverflowbaba.stackoverflowbaba', async function () {
		const text = await vscode.window.showInputBox();
		console.log(typeof (text));
		if (text === '' || typeof (text) === 'undefined') {
			return;
		}
		console.log(text);
		vscode.env.openExternal(vscode.Uri.parse(`https://stackoverflow.com/search?q=${text?.replace(/\s/g, "+")}`));
	});
	context.subscriptions.push(disposable);
}
export function deactivate() { }


// 2w2777mcxo6eu3zd2sutm6ozxyir2vyhr6g4e4dzyfxupkele2fq 