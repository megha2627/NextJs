import Admin from "@/Components/Admin";

export default function AdminLayout({children}){
  return (
    <section>
      <div className="flex flex-row gap-4">
        <div className="w-1/4 bg-gray-200 p-4">
          <Admin />
        </div>
        <div className="w-3/4 bg-white p-4">
          {children}
        </div>
      </div>
    </section>
  )
}