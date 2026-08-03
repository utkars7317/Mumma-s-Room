import PrimaryButton from "@/components/ui/PrimaryButton";

function CTA() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl bg-orange-500 px-8 py-16 text-center text-white shadow-2xl">

          <h2 className="text-4xl font-bold">
            Ready to Find Your Perfect Room?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-orange-100">
            Join thousands of students who found safe and verified accommodation
            through Mumma's Room.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <PrimaryButton className="bg-white text-orange-500 hover:bg-orange-100">
              Explore Rooms
            </PrimaryButton>

            <PrimaryButton
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-500"
            >
              List Your Property
            </PrimaryButton>
          </div>

        </div>
      </div>
    </section>
  );
}

export default CTA;