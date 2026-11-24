window.CASE = {
 "generated": "2026-11-24",
 "corpus": {
  "documents": 40,
  "passages": 12988,
  "chunks": 13040,
  "questions": 27869,
  "test_questions": 2786
 },
 "retrieval": [
  {
   "name": "BM25",
   "r1": 0.5073333333333333,
   "r5": 0.6748333333333333,
   "r10": 0.7331666666666666,
   "r20": 0.7762222222222223,
   "mrr": 0.6721164636017577
  },
  {
   "name": "Hybrid (RRF)",
   "r1": 0.41777777777777775,
   "r5": 0.6381666666666667,
   "r10": 0.7070555555555555,
   "r20": 0.7684444444444445,
   "mrr": 0.5817301813110637
  },
  {
   "name": "Dense (nomic)",
   "r1": 0.3036111111111111,
   "r5": 0.5198333333333333,
   "r10": 0.5892777777777778,
   "r20": 0.6509444444444444,
   "mrr": 0.45928821879015375
  }
 ],
 "overlap": {
  "both": 206,
  "bm25_only": 51,
  "dense_only": 7,
  "neither": 36
 },
 "gate": [
  {
   "threshold": 0,
   "in_corpus_pass": 1.0,
   "out_of_corpus_rejected": 0.0
  },
  {
   "threshold": 5,
   "in_corpus_pass": 1.0,
   "out_of_corpus_rejected": 0.0
  },
  {
   "threshold": 10,
   "in_corpus_pass": 1.0,
   "out_of_corpus_rejected": 0.3
  },
  {
   "threshold": 15,
   "in_corpus_pass": 0.9966666666666667,
   "out_of_corpus_rejected": 0.4
  },
  {
   "threshold": 20,
   "in_corpus_pass": 0.9533333333333334,
   "out_of_corpus_rejected": 0.7
  },
  {
   "threshold": 25,
   "in_corpus_pass": 0.8466666666666667,
   "out_of_corpus_rejected": 0.8
  },
  {
   "threshold": 30,
   "in_corpus_pass": 0.6733333333333333,
   "out_of_corpus_rejected": 0.9
  }
 ],
 "bm25_build_s": 0.51,
 "retrieval_ms_p50": 26.0,
 "retrieval_ms_p95": 45.1,
 "tests": 78,
 "attack_categories": [
  "injected_passage",
  "instruction_override",
  "jailbreak",
  "prompt_extraction"
 ],
 "attack_attempts": 12,
 "out_of_corpus_questions": 10,
 "answers": {
  "refusals": {
   "answer_key_shown": 5,
   "answer_key_missing": 7
  },
  "in_corpus": {
   "questions": 50,
   "answered": 38,
   "false_refusal_rate": 0.24,
   "answer_key_in_context": 0.76,
   "citation_precision": 0.656578947368421,
   "citation_recall": 0.6982456140350878,
   "cites_answer_key": 0.8157894736842105,
   "judged": 4,
   "judge_correct": 1.0,
   "judge_grounded": 1.0
  },
  "out_of_corpus": {
   "questions": 10,
   "refused": 10,
   "refused_by_gate": 3,
   "refused_by_model": 7
  },
  "attacks": [
   {
    "category": "injected_passage",
    "attempts": 3,
    "blocked": 3,
    "flagged": 0,
    "missed": 0
   },
   {
    "category": "instruction_override",
    "attempts": 3,
    "blocked": 3,
    "flagged": 2,
    "missed": 0
   },
   {
    "category": "jailbreak",
    "attempts": 3,
    "blocked": 3,
    "flagged": 3,
    "missed": 0
   },
   {
    "category": "prompt_extraction",
    "attempts": 3,
    "blocked": 3,
    "flagged": 1,
    "missed": 0
   }
  ],
  "latency_s": {
   "retrieve_p50": 0.031,
   "llm_p50": 2.8367595835006796,
   "llm_p95": 13.344224821202804
  },
  "cost_usd": {
   "per_answer_list_price": 0.000475031884057971,
   "judge_total_list_price": 0.0078525,
   "actually_paid": 0.0
  },
  "models": {
   "generator": "gemini/gemini-3.5-flash-lite",
   "judge": "gemini/gemini-3.8-flash"
  }
 }
};
