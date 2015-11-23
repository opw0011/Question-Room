package hk.ust.cse.hunkim.questionroom.renderer.android.parser;

import hk.ust.cse.hunkim.questionroom.renderer.share.platform.parser.Attr;
import hk.ust.cse.hunkim.questionroom.renderer.share.platform.parser.Element;
import hk.ust.cse.hunkim.questionroom.renderer.share.platform.parser.Node;

public class NodeA implements Node {
	
	private org.w3c.dom.Node impl;
	
	public NodeA(org.w3c.dom.Node impl) {
		this.impl = impl;
	}

	public short getNodeType() {
		return impl.getNodeType();
	}

	public Element castToElement() {
		return new ElementA((org.w3c.dom.Element) impl);
	}

	public Attr castToAttr() {
		return new AttrA((org.w3c.dom.Attr) impl);
	}
}
