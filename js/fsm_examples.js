var fsm_examples = {
  "AFND AB": {"type":"NFA","nfa":{"transitions":{"start":{"A":["s0"]},"s0":{"B":["s1"]},"s1":{"":["start"]}},"startState":"start","acceptStates":["s1"]},"states":{"start":{},"s0":{"top":150,"left":245},"s1":{"isAccept":true,"top":327,"left":224}},"transitions":[{"stateA":"start","label":"A","stateB":"s0"},{"stateA":"s0","label":"B","stateB":"s1"},{"stateA":"s1","label":"ϵ","stateB":"start"}],"bulkTests":{"accept":"AB\nABAB\nABABAB","reject":"\nA\nB\nABA\nBA\nBB\nABABB"}},
};
