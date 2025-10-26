export default function NotificationsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="p-6">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Notifications</h1>
        </div>
      </div>
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-card/50 backdrop-blur-sm rounded-2xl shadow-lg border-0 p-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-6 mx-auto">
              <span className="text-4xl">🔔</span>
            </div>
            <h2 className="text-xl font-semibold text-foreground mb-2">All caught up!</h2>
            <p className="text-muted-foreground">Your notifications will appear here when you have updates.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
