export default function ErrorMsg({ message }: { message: string }) {
  return (
    <div className="flex h-screen items-center justify-center">
      <span className="text-6xl font-bold text-red-500">{message}</span>
    </div>
  );
}
