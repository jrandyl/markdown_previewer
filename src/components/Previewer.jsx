import React, { Component } from "react";
import { marked } from 'marked';

marked.setOptions({
	breaks: true,
})

class Previewer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			text:  `
# H1
## H2
[title](https://www.google.com)
\`code\`
\`\`\`
{
	"sampleName": "My Name",
}
\`\`\`

- One
- Two
- Three

>block

![alt sample image](img.jpg)

**SAMPLE BOLD**
			 `,
		};
	}

	handleChange = (e) => {
		this.setState({
			text: e.target.value,
		});
	};

	render() {
		let { text } = this.state;
		return (
			<React.Fragment>
				<div className="editor-wrapper">
					<label htmlFor="editor">CODE EDITOR</label>
					<textarea
						name="editor"
						id="editor"
						cols="30"
						rows="100"
						value={text}
						onChange={this.handleChange}
					></textarea>
				</div>
				<div className="output-wrapper">
					<label htmlFor="preview">OUTPUT</label>
					<div
						id="preview"
						dangerouslySetInnerHTML={{
							__html: marked(text),
						}}
					></div>
				</div>
			</React.Fragment>
		);
	}
}

export default Previewer;
