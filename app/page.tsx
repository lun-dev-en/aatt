"use client";

import { useMemo, useState } from "react";

type Mood = {
  id: "happy" | "sad" | "angry" | "tired";
  label: string;
  emoji: string;
  bgClass: string;
  message: string;
};

const moods: Mood[] = [
  {
    id: "happy",
    label: "😊 happy",
    emoji: "😊",
    bgClass: "from-pink-200 via-pink-100 to-rose-200",
    message: "いいね！今日も元気にいこう！",
  },
  {
    id: "sad",
    label: "😢 sad",
    emoji: "😢",
    bgClass: "from-pink-50 via-pink-100 to-pink-200",
    message: "今日はゆっくり休んでも大丈夫だよ。",
  },
  {
    id: "angry",
    label: "😡 angry",
    emoji: "😡",
    bgClass: "from-rose-200 via-pink-200 to-red-200",
    message: "イライラを力に変えていこう！",
  },
  {
    id: "tired",
    label: "😴 tired",
    emoji: "😴",
    bgClass: "from-pink-100 via-fuchsia-100 to-purple-100",
    message: "おつかれさま。ゆっくり深呼吸しよう。",
  },
];

export default function Home() {
  const [selectedMood, setSelectedMood] = useState<Mood>(moods[0]);

  const currentMood = useMemo(() => selectedMood, [selectedMood]);

  return (
    <div className="min-h-screen bg-[var(--background)] p-6 text-[var(--foreground)]">
      <main className="mx-auto flex min-h-[calc(100vh-3rem)] max-w-3xl flex-col gap-8 rounded-3xl border border-pink-100 bg-white/95 p-8 shadow-2xl shadow-pink-200/40 backdrop-blur-xl">
        <section className="space-y-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-pink-500">
            今日の気分を選んでね
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-rose-900">
            きもちチェンジャー
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-7 text-rose-700">
            ボタンを押すと背景とキャラクターが変わるよ。AIメッセージはあとでつなげてもっとすごくできる！
          </p>
        </section>

        <section className="grid gap-6 lg:grid-cols-[240px_1fr]">
          <div className="space-y-4 rounded-3xl border border-pink-100 bg-pink-50 p-6">
            <div className={`rounded-3xl bg-gradient-to-br ${currentMood.bgClass} p-8 text-center shadow-inner shadow-pink-200/40`}>
              <div className="text-7xl">{currentMood.emoji}</div>
              <p className="mt-4 text-xl font-semibold text-rose-900">
                {currentMood.message}
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-sm font-semibold uppercase tracking-[0.32em] text-pink-500">
                きもちボタン
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {moods.map((mood) => (
                  <button
                    key={mood.id}
                    type="button"
                    onClick={() => setSelectedMood(mood)}
                    className={`rounded-2xl border px-4 py-3 text-left text-base font-medium transition-all duration-200 ${
                      selectedMood.id === mood.id
                        ? "border-rose-900 bg-rose-700 text-white shadow-lg shadow-rose-900/10"
                        : "border-pink-200 bg-white text-rose-700 hover:border-pink-300 hover:bg-pink-50"
                    }`}
                  >
                    <span className="text-2xl">{mood.emoji}</span>
                    <span className="mt-1 block">{mood.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-pink-100 bg-pink-50 p-6">
            <div className="space-y-5">
              <div className="rounded-3xl bg-white p-6 text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-pink-500">
                  AIメッセージ（あとでAPI接続）
                </p>
                <p className="mt-4 text-lg leading-8 text-rose-700">
                  {selectedMood.id === "happy" && "今日のいい気分を大切にしてね！"}
                  {selectedMood.id === "sad" && "今はゆっくり休んで、自分をいたわってあげてね。"}
                  {selectedMood.id === "angry" && "その気持ちはとても大切。深呼吸して落ち着こう。"}
                  {selectedMood.id === "tired" && "おつかれさま。しっかり休む時間をつくってね。"}
                </p>
              </div>

              <div className="space-y-3 rounded-3xl border border-dashed border-pink-200 bg-white p-5">
                <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-pink-500">
                  現在の状態
                </h3>
                <div className="grid gap-3 text-sm text-rose-700">
                  <div className="flex items-center justify-between rounded-2xl bg-pink-50 px-4 py-3">
                    <span>選択中の気分</span>
                    <strong>{currentMood.label}</strong>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl bg-pink-50 px-4 py-3">
                    <span>キャラクター</span>
                    <strong>{currentMood.emoji}</strong>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl bg-pink-50 px-4 py-3">
                    <span>背景テーマ</span>
                    <strong>{currentMood.id}</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
