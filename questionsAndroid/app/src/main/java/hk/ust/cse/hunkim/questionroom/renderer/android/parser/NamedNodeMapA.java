package hk.ust.cse.hunkim.questionroom.renderer.android.parser;

import hk.ust.cse.hunkim.questionroom.renderer.share.platform.parser.NamedNodeMap;
import hk.ust.cse.hunkim.questionroom.renderer.share.platform.parser.Node;

public class NamedNodeMapA implements NamedNodeMap {
	
	private org.w3c.dom.NamedNodeMap impl;
	
	public NamedNodeMapA(org.w3c.dom.NamedNodeMap impl) {
		this.impl = impl;
	}

	public int getLength() {
		return impl.getLength();
	}

	public Node item(int index) {
		return new NodeA(impl.item(index));
	}

}
