function constructionCrew(worker) {
    if (!worker.dizziness) return(worker)

    const intakeWater = (worker.weight * (worker.experience / 10))
    worker.dizziness = false
    worker.levelOfHydrated += intakeWater
    return(worker)
}

constructionCrew({ weight: 80,
  experience: 1,
  levelOfHydrated: 0,
  dizziness: true })